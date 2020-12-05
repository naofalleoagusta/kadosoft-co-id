<?php

use Illuminate\Database\Seeder;

class PortofolioPhoto extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('portofolio_photos')->insert([
            'type' => "main",
            "portofolio_id" => 1,
            "url" => "https://ik.imagekit.io/vp9bgybmpm/Gourmet-main_nnukfEKc5O.png"
        ]);
        DB::table('portofolio_photos')->insert([
            'type' => "preview",
            "portofolio_id" => 1,
            "url" => "https://ik.imagekit.io/vp9bgybmpm/gourmet_5NSZ2IS_r.png"
        ]);
        DB::table('portofolio_photos')->insert([
            'type' => "main",
            "portofolio_id" => 2,
            "url" => "https://ik.imagekit.io/vp9bgybmpm/pavshop-main_g1PSy1WTLgE.png"
        ]);
        DB::table('portofolio_photos')->insert([
            'type' => "preview",
            "portofolio_id" => 2,
            "url" => "https://ik.imagekit.io/vp9bgybmpm/pavshop-preview_v60Aqgq1PM.png"
        ]);
        DB::table('portofolio_photos')->insert([
            'type' => "main",
            "portofolio_id" => 3,
            "url" => "https://ik.imagekit.io/vp9bgybmpm/kadosoft-ig-main_sP09F1Tsi.png"
        ]);
        DB::table('portofolio_photos')->insert([
            'type' => "preview",
            "portofolio_id" => 3,
            "url" => "https://ik.imagekit.io/vp9bgybmpm/preview-kadosoft_K898WPR1X.png"
        ]);
        DB::table('portofolio_photos')->insert([
            'type' => "main",
            "portofolio_id" => 4,
            "url" => "https://ik.imagekit.io/vp9bgybmpm/deerhost-main_T4rCQNoHn.png"
        ]);
        DB::table('portofolio_photos')->insert([
            'type' => "preview",
            "portofolio_id" => 4,
            "url" => "https://ik.imagekit.io/vp9bgybmpm/deerhost-preview_KMfTm-YYK.jpg"
        ]);
        DB::table('portofolio_photos')->insert([
            'type' => "main",
            "portofolio_id" => 5,
            "url" => "https://ik.imagekit.io/vp9bgybmpm/neos-main_4rphmqGEx.png"
        ]);
        DB::table('portofolio_photos')->insert([
            'type' => "preview",
            "portofolio_id" => 5,
            "url" => "https://ik.imagekit.io/vp9bgybmpm/neos-preview_60r7nOLmZ.png"
        ]);
    }
}
