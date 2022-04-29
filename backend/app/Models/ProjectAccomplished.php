<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectAccomplished extends Model
{
    use HasFactory;

    protected $fillable = [
        'project_id',
        'project_task_id',
        'total_amount',
        'is_payed'
    ];

    public $timestamps = true;

    public function task(){
        return $this->belongsTo(ProjectTask::class, 'project_task_id');
    }
}
