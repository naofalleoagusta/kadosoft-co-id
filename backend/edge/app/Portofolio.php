<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Portofolio extends Model
{
    protected $guarded = [];  
    //

    
    public function category(): BelongsTo
    {
        return $this->belongsTo(PortofolioCategories::class);
    }
    public function photo(): HasMany
    {
        return $this->hasMany(PortofolioPhotos::class);
    }
}
