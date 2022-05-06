<?php

namespace App\Http\Controllers;

use App\Models\BudgetCategory;
use Exception;
use Illuminate\Http\Request;

class BudgetCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $budget_categories = BudgetCategory::all();
            return response()->json(['data' => $budget_categories], 200);

            throw new Exception("As categorias não foram carregadas. Atualize a página ou contate o administrador do sistema.", 1);
        }
        catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
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
     * @param  \App\Models\BudgetCategory  $budgetCategory
     * @return \Illuminate\Http\Response
     */
    public function show(BudgetCategory $budgetCategory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\BudgetCategory  $budgetCategory
     * @return \Illuminate\Http\Response
     */
    public function edit(BudgetCategory $budgetCategory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\BudgetCategory  $budgetCategory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, BudgetCategory $budgetCategory)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\BudgetCategory  $budgetCategory
     * @return \Illuminate\Http\Response
     */
    public function destroy(BudgetCategory $budgetCategory)
    {
        //
    }
}
