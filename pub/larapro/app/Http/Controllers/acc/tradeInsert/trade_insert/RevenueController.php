<?php

namespace App\Http\Controllers\acc\tradeInsert\trade_insert;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class RevenueController extends Controller
{
    public function index() {
	return view('revenue');
    }
}
