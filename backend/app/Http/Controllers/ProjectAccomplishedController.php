<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProjectAccomplished;

class ProjectAccomplishedController extends Controller
{
    private $requestPayment;

    public function __construct(ProjectAccomplished $requestPayment) {
        $this->requestPayment = $requestPayment;
    }

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
        try {
			$requestPay = $request->all();
			$this->requestPayment->create($requestPay);
			return response()->json(['data' => 'Solicitação criada com sucesso!'], 201);
		} catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()]);
		}
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ProjectAccomplished  $projectAccomplished
     * @return \Illuminate\Http\Response
     */
    public function show(ProjectAccomplished $projectAccomplished)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ProjectAccomplished  $projectAccomplished
     * @return \Illuminate\Http\Response
     */
    public function edit(ProjectAccomplished $projectAccomplished)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ProjectAccomplished  $projectAccomplished
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ProjectAccomplished $projectAccomplished)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ProjectAccomplished  $projectAccomplished
     * @return \Illuminate\Http\Response
     */
    public function destroy(ProjectAccomplished $projectAccomplished)
    {
        //
    }
}
