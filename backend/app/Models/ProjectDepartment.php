<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectDepartment extends Model
{
    use HasFactory;

    public function services() {
        return $this->hasMany(ProjectDepartmentService::class, 'project_department_id');
    }
}
