<?php

namespace App\GraphQL\Queries;
use App\Portofolio;

class GetTop3Portofolio
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args)
    {
        // TODO implement the resolver
        $portofolio = Portofolio::limit(3)->get();
        return $portofolio;

        // return "Hellow";
    }
}
