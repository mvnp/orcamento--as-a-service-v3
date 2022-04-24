<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectTasksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('project_tasks', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->foreignId('project_id')->constrained();
            $table->foreignId('project_department_id')->constrained();
            $table->foreignId('project_department_service_id')->constrained();
            $table->text("description_of_service");
            $table->integer("percent_of_department");
            $table->integer("percent_of_service");
            $table->double("total_amount_task", 8, 2);
            $table->boolean("status_partner_ended")->default(false);
            $table->boolean("status_customer_ended")->default(false);
            $table->dateTime("date_task_executed")->default(null);
            $table->dateTime("date_request_payment")->default(null);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('project_tasks');
    }
}
