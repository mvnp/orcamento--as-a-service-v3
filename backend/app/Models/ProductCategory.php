<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductCategory extends Model
{
    use HasFactory;

    public function subcategories() {
        return $this->hasMany(ProductSubcategory::class, 'product_categories_id');
    }
}
