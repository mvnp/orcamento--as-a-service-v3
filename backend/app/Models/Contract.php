<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contract extends Model
{
    use HasFactory;

    public function project() {
        return $this->belongsTo(Project::class, 'project_id');
    }

    public function user() {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function customer() {
        return $this->belongsTo(Customer::class, 'customer_id');
    }

    public function partner() {
        return $this->belongsTo(Partner::class, 'partner_id');
    }

    public function propertier() {
        return $this->belongsTo(ContractsPropertier::class, 'contracts_propertier_id');
    }
}
