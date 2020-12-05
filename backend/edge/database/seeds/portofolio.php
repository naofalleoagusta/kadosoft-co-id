<?php

use Illuminate\Database\Seeder;

class portofolio extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('portofolios')->insert([
            'name' => "Gourmet",
            "category_id" => 1,
            "url" => "https://demo.kadosoft.co.id/gourmet/",
            "description" => "Gourmet is a fantastic responsive restaurant website based on Bootstrap Framework. The flexibility of Gourmet ensures a smooth and stable experience on all devices, smartphones, tablets and desktop computers. Of course, Gourmet also runs flawlessly on retina screens and all popular web browsers. The web design easily caters to your needs and regulations due to the cleanness and creativity. With Gourmet, you will amaze and impress everyone who visits your restaurant site."
        ]);
        DB::table('portofolios')->insert([
            'name' => "Pavshop",
            "category_id" => 2,
            "url" => "https://demo.kadosoft.co.id/pavshop/",
            "description" => "PavStore fully responsive design and clean was tested on all major handheld devices.Unlimited possibilities & flexible that will easily be able to support every site development. Pav Store shopping site template is perfect for the many types of industry like food store, clothes shop, jewelry shop, electronics shop, retail fashion women, fashion men and kids store. It is unique by it’s clean design and the high variety of features."
        ]);
        DB::table('portofolios')->insert([
            'name' => "KadoSoft IG",
            "category_id" => 3,
            "url" => "https://demo.kadosoft.co.id/pavshop/",
            "description" => "KadoSoft IG is an instagram account made by KadoSoft for promotional purpose. The account is managed by our social media management team, all the content including images, captions, hashtags, etc were made by our social media management team."
        ]);
        DB::table('portofolios')->insert([
            'name' => "Deerhost",
            "category_id" => 1,
            "url" => "https://demo.kadosoft.co.id/deerhost/",
            "description" => "DeerHost is a hosting website template that equips you with an array of goodies for a quick start of a spectacular online presence. Moreover, DeerHost also follows all the current trends, ensuring your website to operate without a hitch. In other words, the template is 100% mobile-ready, cross-browser compatible and in tune with retina screens."
        ]);
        DB::table('portofolios')->insert([
            'name' => "Neos",
            "category_id" => 1,
            "url" => "https://demo.kadosoft.co.id/neos/",
            "description" => "Neos is a remarkable and  agency business website template with an impactful design that will instantly set you apart from the competition. The appearance of this nifty site skin is modern and creative, making sure all your content comes into view beautifully. The layout is also entirely compatible with modern devices and web browsers for an always smooth experience. In addition to that, Neos is also in tune with retina screens and lightweight."
        ]);
    }
}
