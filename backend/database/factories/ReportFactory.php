<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ReportFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'project_id' => 1,
            'type' => $this->faker->randomElement(['observacao', 'itens']),
            'name' => $this->faker->sentence,
            'description' => $this->faker->paragraph(2),
            'status' => $this->faker->randomElement(['sim', 'nao']),
        ];
    }
}
