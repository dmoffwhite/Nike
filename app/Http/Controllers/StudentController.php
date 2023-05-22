<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Student;
use App\Models\Program;
//use Validator;
use Illuminate\Validation\Rule;
//use App\Http\Controllers\ResponseController as ResponseController;


class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        
        $student = Student::where('name', 'diego')->get();
        return $student;
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
        $validator = Validator::make($request->all(), [
            'name' => 'required|min:3',
            'last_name' => 'required|min:5',
            'control' => 'required|min:8',
            'email' => 'required|email|unique:students',
        ]);

        if($validator->fails()){
            return $validator->errors();
        }

        $program = Program::find($request->program_id);
        if(is_null ($program)){
            return 'Program id not found';
        }

        $student = new Student;
        $student->id = $request->id;
        $student->name = $request->name;
        $student->last_name = $request->last_name;
        $student->control = $request->control;
        $student->email = $request->email;
        $student->program_id = $request->program_id;
        $student->save();
        return Student::all();



    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        //
        $student = Student::where('control', $request->control)->first();
        $student->name = $request->name;
        $student->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $student = Student::where('id', $request->id);
        $student->delete();
        return Student::all(); 
    }
 
    public function get_token(){
        return csrf_token();
    }
}
