<?php

namespace App\Http\Controllers;

use App\Models\ContractsPropertier;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class ContractsPropertierController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $contract_properties = ContractsPropertier::orderBy('title', 'asc')->get();
            return Response::json(array('data' => $contract_properties), 200);
        } catch (\Exception $e) {
            return Response::json(array('error' => $e->getMessage()), 500);
        }
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
     * @param  \App\Models\ContractsPropertier  $contractsPropertier
     * @return \Illuminate\Http\Response
     */
    public function show(ContractsPropertier $contractsPropertier)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ContractsPropertier  $contractsPropertier
     * @return \Illuminate\Http\Response
     */
    public function edit(ContractsPropertier $contractsPropertier)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ContractsPropertier  $contractsPropertier
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ContractsPropertier $contractsPropertier)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ContractsPropertier  $contractsPropertier
     * @return \Illuminate\Http\Response
     */
    public function destroy(ContractsPropertier $contractsPropertier)
    {
        //
    }
}
