<?php

namespace App\Http\Controllers;

use App\Models\Generic;
use Illuminate\Http\Request;

use Exception;

class GenericController extends Controller
{

    protected $model;

    public function __construct(Generic $model)
    {
        $this->model = $model;
    }

    /**
     * Display a listing of the resource.
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $generics = $this->model->all();
            return response()->json(['data' => $generics], 200);
        }
        catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 401);
        }
    }

    /**
     * Store a newly created resource in storage.
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $save = $this->model->create($request->all());
            return response()->json(['data' => "O generics foi criado com sucesso"], 200);
        }
        catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 401);
        }
    }

    /**
     * Display the specified resource.
     * @param  \App\Models\Generic  $generic
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $generic = $this->model->findOrFail($id);
            return response()->json(['data' => $generic], 200);
        }
        catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 401);
        }
    }

    /**
     * Update the specified resource in storage.
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Generic  $generic
     * @return \Illuminate\Http\Response
     */
    public function update($id, Request $request)
    {
        try {
            $obj = $this->model->findOrFail($id);
            $update = $obj->update($request->all());
            return response()->json(['data' => "O generics foi atualziado com sucesso"], 200);
        }
        catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 401);
        }
    }

    /**
     * Remove the specified resource from storage.
     * @param  \App\Models\Generic  $generic
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            if($this->model->destroy($id) || throw new Exception()) {
                return response()->json(['data' => 'O generic foi removido com sucesso!'], 200);
            }
		}
        catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
		}
    }
}
