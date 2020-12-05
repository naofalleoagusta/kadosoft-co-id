<?php

namespace App\GraphQL\Mutations;
use Illuminate\Support\Facades\Mail;
use App\Mail\CatalogMail;


class Sendemail
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args) : bool
    {
        // TODO implement the resolver
        $email = $args['to'];
        Mail::to($email)->send(new CatalogMail());
        $failEmail = Mail::failures();
        if(count($failEmail) > 0 ){
            return false;
        }
        else{
            return true;
        }


    }
}
