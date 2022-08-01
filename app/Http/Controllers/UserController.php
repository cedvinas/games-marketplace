<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class UserController extends Controller
{
    public function addSellerRole(Request $request){
        $id = $request->all();
        DB::table('users')->where('id',$id)->update(['role' => 'seller']);
        return redirect('/dashboard');
    }
}
