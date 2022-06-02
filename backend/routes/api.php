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
use App\Http\Controllers\ProjectAccomplishedController;
use App\Http\Controllers\BudgetCategoryController;
use App\Http\Controllers\GenericController;
use App\Http\Controllers\ProjectGalleryController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\TemporarioController;

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

Route::middleware(['api'])->group(function()
{
    Route::prefix('v1')->group(function() {
        Route::post('/register', [AuthController::class, 'register']);
        Route::post('/login', [AuthController::class, 'login']);
        Route::post('/logout', [AuthController::class, 'logout']);
        Route::post('/refresh', [AuthController::class, 'refresh']);
        Route::post('/user', [AuthController::class, 'user']);
    });
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
        Route::get('/budgets',                      'index');
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


Route::controller(ProjectAccomplishedController::class)->group(function() {
    Route::prefix('v1')->group(function(){
        Route::get('/accomplisheds', 'index');
        Route::post('/request-payment', 'store');
    });
});

Route::controller(BudgetCategoryController::class)->group(function() {
    Route::prefix('v1')->group(function() {
        Route::get('/budget-categories',                'index');
        // Route::get('/budget-categories/{id}',        'show');
        // Route::post('/budget-categories',            'store');
        // Route::put('/budget-categories',             'update');
        // Route::delete('/budget-categories/{id}',     'destroy');
    });
});

Route::controller(TemporarioController::class)->group(function() {
    Route::prefix('v1')->group(function() {
        Route::get('/temporario',                       'index');
        Route::get('/temporario/{id}',                  'show');
        // Route::get('/budget-categories/{id}',        'show');
        // Route::post('/budget-categories',            'store');
        // Route::put('/budget-categories',             'update');
        // Route::delete('/budget-categories/{id}',     'destroy');
    });
});

Route::controller(ReportController::class)->group(function() {
    Route::prefix('v1')->group(function() {
        Route::get('/reports',                  'index');
        Route::get('/reports/{project_id}',     'show');
        Route::get('/reports/pdf/{id}',         'generate');
        // Route::post('/budget-categories',    'store');
        // Route::put('/budget-categories',     'update');
        Route::delete('/reports/{id}',          'destroy');
    });
});

Route::controller(GenericController::class)->group(function() {
    Route::prefix('v1')->group(function() {
        Route::get('/generics',             'index');
        Route::get('/generics/{id}',        'show');
        Route::post('/generics',            'store');
        Route::put('/generics/{id}',        'update');
        Route::delete('/generics/{id}',     'destroy');
    });
});


Route::controller(ProjectGalleryController::class)->group(function() {
    Route::prefix('v1')->group(function() {
        Route::get('/project-gallery',              'index');
        Route::get('/project-gallery/{id}',         'show');
        Route::post('/project-gallery',             'store');
        Route::put('/project-gallery/{id}',         'update');
        Route::delete('/project-gallery/{id}',      'destroy');
    });
});
