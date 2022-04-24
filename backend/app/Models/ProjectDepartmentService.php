<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectDepartmentService extends Model
{
    use HasFactory;

    public function departments() {
        return $this->belongsTo(ProjectDepartment::class);
    }

    public function tasks() {
        return $this->hasMany(ProjectTask::class);
    }
}
