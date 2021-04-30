<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AppController extends Controller 
{ 
    
    public function login(){
    	return  response()->json(['msg'=>'onely Json']);
    }
}
