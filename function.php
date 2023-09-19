<?php

class Elementor_Form_Additional_Webhook {

 

	function hooks(){

		//Add our additional webhook right here

		add_action( 'elementor_pro/forms/new_record', array( $this, 'manipulate_form_submission' ), 10, 2 );

	}

 

	function manipulate_form_submission( $record, $ajax_handler ) {

 

		$form_name = $record->get_form_settings( 'form_name' );

		if ( 'form_api' == $form_name ) {

			$form_data = $record->get( 'fields' );

 

			//change the names of fields before we send them somewhere

			$new_data = array(

				'username' => $form_data['username']['raw_value'],

				'nickname' => $form_data['nickname']['raw_value'],

				'birthdate' => $form_data['birthdate']['raw_value'],

				'club' => $form_data['club']['raw_value'],

				'email' => $form_data['email']['raw_value']

			);

 

			$response = wp_remote_post( 'https://api-dg.sxgrupo.com.br/api/sx-suprema/register_player_slot',

									   array( 'headers' => array('Content-Type' => 'application/json', 'Authorization' => 'ubUjHPeaPXgdcWMz7luKfSF5xP49X3'),

											 'timeout' => 60,

											 'body' => wp_json_encode($new_data)

											)

									  );

 

			//if the failure of our additional webhook should prevent the form from submitting...

			if( is_wp_error( $response ) ) {

				$msg = 'Um problema foi encontrado no servidor. Entre em contato com o suporte.';

				$ajax_handler->add_error( 0, $msg );

				$ajax_handler->add_error_message( $msg );

				$ajax_handler->is_success = false;

			}

			if ( wp_remote_retrieve_response_code( $response ) != 200 ) {

				$response = wp_remote_retrieve_body( $response );

				$ajax_handler->add_error( 0, $response );

				$ajax_handler->add_error_message( $response );

				$ajax_handler->is_success = false;

			}

		}

		else {

			return;

		}

	}

}

 

$elementor_webhook_239909870234 = new Elementor_Form_Additional_Webhook();

$elementor_webhook_239909870234->hooks();
?>