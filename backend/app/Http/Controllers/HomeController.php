<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\ProjectDepartment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class HomeController extends Controller
{
    private $project;

    public function __construct(Project $project) {
        $this->project = $project;
    }

    public function index()
    {
        $amount_of_project = $this->project->find(10)['amount'];
        $what_months_have = $this->project->getTimeOfProject(1);

        # dd($what_months_have);



        $departments = ProjectDepartment::with('services')->with('services.tasks', function ($query) {
            $query->where('project_tasks.project_id', '=', 1);
        })->get();




        # echo "<pre>"; print_r($depart->toJson()); exit;

        # echo $depart->toJson();

        # return Response::json(array('data' => $depart), 200);

        return view('home', compact(
            'departments',
            'amount_of_project',
            'what_months_have'
        ));
    }
}
