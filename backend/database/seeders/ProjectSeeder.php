<?php

namespace Database\Seeders;

use App\Models\Project;

use Carbon\Carbon;
use Faker\Generator;
use Illuminate\Database\Seeder;
use Illuminate\Container\Container;

class ProjectSeeder extends Seeder
{
    /**
    * Initialize faker.
    */
    protected $faker;

    /**
    * Create a instance of faker.
    */
    public function __construct() {
        $this->faker = $this->withFaker();
    }

    /**
    * Use a method to attribute object of faker.
    */
    protected function withFaker() {
        return Container::getInstance()->make(Generator::class);
    }

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $projectName = [
            "Casa com piscina na Ville",
            "Casa 2 andares do Mariethoz",
            "Prédio comercial Santa Mônica",
            "Galeria para shopping da baixada",
            "Condomínio com 18 casas",
            "Casa com currasqueira externa e piscina",
            "Casa de vidro de esquina na Pedra Branca",
            "Mansão 3 andares 9 vagas de garagem",
            "Hogar prédio comercial 30 salas"
        ];

        foreach (range(1, 118) as $index){
            Project::create([
                'customer_id' => (($index)+1),
                'partner_id' => 1,
                'title' =>  $this->faker->randomElement($projectName),
                'description' => $this->faker->paragraph,
                'property_area' => $this->faker->numberBetween(80, 200),
                'total_area' => $this->faker->numberBetween(300, 600),
                'amount' => $this->faker->randomFloat(2, 180000, 1000000),
                'floors' => $this->faker->numberBetween(1, 3),
                'type' => $this->faker->randomElement(['casa', 'prédio']),
                'started_at' => Carbon::now()->firstOfMonth(),
                'ended_at' => Carbon::now()->addWeeks(52)->lastOfMonth(),
                'is_public' => $this->faker->boolean(),
                'is_active' => $this->faker->boolean(),
            ]);

            // Reset
            $this->faker->unique(true);
        }
    }
}
