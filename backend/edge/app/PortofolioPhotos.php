<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PortofolioPhotos extends Model
{
    //

    protected $guarded = [];  
    //

    
    public function portofolio(): BelongsTo
    {
        return $this->belongsTo(Portofolio::class);
    }
}
