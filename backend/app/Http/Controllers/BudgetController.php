<?php

namespace App\Http\Controllers;

use App\Models\Budget;
use App\Models\Project;
use App\Models\ProjectDepartment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class BudgetController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Budget  $budget
     * @return \Illuminate\Http\Response
     */
    public function show($project_id = 1)
    {
        $project = Project::find($project_id);
        $amount_of_project = $project['amount'];
        $what_months_have = Project::getTimeOfProject($project_id);
        $departments = ProjectDepartment::with('services')->with('services.tasks', function($query) use ($project_id) {
            $query->where('project_tasks.project_id', '=', $project_id);
        })->get();

        return Response::json(array('data' => [
            "project" => $project,
            "amount" => $amount_of_project,
            "months" => $what_months_have,
            "departments" => $departments
        ]), 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Budget  $budget
     * @return \Illuminate\Http\Response
     */
    public function edit(Budget $budget)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Budget  $budget
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Budget $budget)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Budget  $budget
     * @return \Illuminate\Http\Response
     */
    public function destroy(Budget $budget)
    {
        //
    }
}
