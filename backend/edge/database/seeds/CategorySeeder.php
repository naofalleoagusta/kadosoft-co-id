<?php

use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('portofolio_categories')->insert([
            'category_name' => "Web Dev",
        ]);
        DB::table('portofolio_categories')->insert([
            'category_name' => "E-Commerce",
        ]);
        DB::table('portofolio_categories')->insert([
            'category_name' => "Social Media",
        ]);

    }
}
