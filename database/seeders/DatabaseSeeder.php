<?php

namespace Database\Seeders;


use App\Models\Student;
use App\Models\Program;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;


class DatabaseSeeder extends Seeder 
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        // $program = new Program;
        // $program->name = 'ITIC';
        // $program->description = 'Software Developing';
        // $program->save();

        // $student = new Student;
        // $student->name = 'Cristiano';
        // $student->last_name = 'Ronaldo';
        // $student->email = 'cr7@gmail.com';
        // $student->control = 176616;
        // $student->program_id= '1';
        // $student->save();

        // $this->call([StudentSeeder::class]);

        Program::factory(3)->create();
        Student::factory(10)->create();

    }
}
