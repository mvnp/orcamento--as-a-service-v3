<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Budget extends Model
{
    use HasFactory;

    public function partner() {
        return $this->belongsTo(Partner::class, 'partner_id');
    }

    public function project() {
        return $this->belongsTo(Project::class, 'project_id');
    }

    public function budget_category() {
        return $this->belongsTo(BudgetCategory::class, 'budget_category_id');
    }
}
