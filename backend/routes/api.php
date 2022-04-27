<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\BudgetController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\PartnerController;
use App\Http\Controllers\ProductCategoryController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ProjectTaskController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ContractController;
use App\Http\Controllers\ContractsSampleController;
use App\Http\Controllers\ContractsPropertierController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('register', [\App\Http\Controllers\AuthController::class, 'register']);
Route::post('login', [\App\Http\Controllers\AuthController::class, 'login']);
Route::post('pagina-inicial', [\App\Http\Controllers\HomeController::class, 'pagina-inicial']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('user', [\App\Http\Controllers\AuthController::class, 'user']);
    Route::get('logout', [\App\Http\Controllers\AuthController::class, 'logout']);
});

Route::controller(ProductCategoryController::class)->group(function() {
    Route::prefix('v1')->group(function() {
        Route::get('/product-categories',           'index');
        // Route::get('/cronograma/{id}',           'show');
        // Route::post('/cronograma',               'store');
        // Route::put('/cronograma',                'update');
        // Route::delete('/cronograma/{id}',        'destroy');
    });
});

Route::controller(ProjectController::class)->group(function() {
    Route::prefix('v1')->group(function() {
        Route::get('/projects',                     'index');
        Route::get('/project/{id}',                 'show');
        // Route::post('/cronograma',               'store');
        // Route::put('/cronograma',                'update');
        // Route::delete('/cronograma/{id}',        'destroy');
    });
});

Route::controller(CustomerController::class)->group(function() {
    Route::prefix('v1')->group(function() {
        Route::get('/customers',                    'index');
        Route::get('/customers/{customer}',         'show');
        // Route::post('/cronograma',               'store');
        // Route::put('/cronograma',                'update');
        // Route::delete('/cronograma/{id}',        'destroy');
    });
});

Route::controller(PartnerController::class)->group(function() {
    Route::prefix('v1')->group(function() {
        Route::get('/partners',                     'index');
        Route::get('/partner/{partner}',            'show');
        // Route::post('/cronograma',               'store');
        // Route::put('/cronograma',                'update');
        // Route::delete('/cronograma/{id}',        'destroy');
    });
});

Route::controller(UserController::class)->group(function() {
    Route::prefix('v1')->group(function() {
        Route::get('/users',                        'index');
        Route::get('/users/{user}',                 'show');
        // Route::post('/cronograma',               'store');
        // Route::put('/cronograma',                'update');
        // Route::delete('/cronograma/{id}',        'destroy');
    });
});

Route::controller(ProjectTaskController::class)->group(function() {
    Route::prefix('v1')->group(function() {
        Route::get('/project-task',                 'index');
        Route::get('/project-task/{id}',            'show');
        // Route::post('/cronograma',               'store');
        // Route::put('/cronograma',                'update');
        // Route::delete('/cronograma/{id}',        'destroy');
    });
});

Route::controller(BudgetController::class)->group(function() {
    Route::prefix('v1')->group(function() {
        // Route::get('/budgets',                   'index');
        Route::get('/budget/{project}',             'show');
        // Route::post('/cronograma',               'store');
        // Route::put('/cronograma',                'update');
        // Route::delete('/cronograma/{id}',        'destroy');
    });
});

Route::controller(ContractsSampleController::class)->group(function() {
    Route::prefix('v1')->group(function() {
        Route::get('/contract-samples',             'index');
        // Route::get('/budget/{project}',          'show');
        // Route::post('/cronograma',               'store');
        // Route::put('/cronograma',                'update');
        // Route::delete('/cronograma/{id}',        'destroy');
    });
});

Route::controller(ContractsPropertierController::class)->group(function() {
    Route::prefix('v1')->group(function() {
        Route::get('/contract-properties',          'index');
        // Route::get('/budget/{project}',          'show');
        // Route::post('/cronograma',               'store');
        // Route::put('/cronograma',                'update');
        // Route::delete('/cronograma/{id}',        'destroy');
    });
});

Route::controller(ContractController::class)->group(function() {
    Route::prefix('v1')->group(function() {
        Route::get('/contracts',                    'index');
        Route::get('/contracts/{id}',               'show');
        // Route::post('/cronograma',               'store');
        // Route::put('/cronograma',                'update');
        // Route::delete('/cronograma/{id}',        'destroy');
    });
});
