<?php

namespace App\GraphQL\Queries;
use App\Portofolio;

class GetPortofoliosByCategory
{
    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args)
    {
        // TODO implement the resolver
        $category = $args['category'];
        if($category>=1 && $category<=3){
            $portofolio = Portofolio::where('category_id', '=', $category)->get();
            return $portofolio;
        }
        else{
            $portofolio = Portofolio::get();
            return $portofolio;
        }
    }
}
