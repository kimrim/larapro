<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('revenue/index',  'acc\tradeInsert\trade_insert\RevenueController@index');

Route::get('/', function () {
	return view('acc.tradeInsert.trade_insert.revenue');
});

Route::get('revenue', function () {
	return view('acc.tradeInsert.trade_insert.revenue');
});

Route::get('cost', function () {
	return view('acc.tradeInsert.trade_insert.cost');
});

Route::get('ilbantrade', function () {
	return view('acc.tradeInsert.trade_insert.ilbantrade');
});

Route::get('revenue_hh', function () {
	return view('acc.tradeInsert.trade_insert.revenue_hh');
});

Route::get('cost_hh', function () {
	return view('acc.tradeInsert.trade_insert.cost_hh');
});

Route::get('ilbantrade_hh', function () {
	return view('acc.tradeInsert.trade_insert.ilbantrade_hh');
});



Route::get('bankTrade', function () {
	return view('acc.tradeInsert.otherTradeOne.bankTrade');
});

Route::get('bussinessCard', function () {
	return view('acc.tradeInsert.otherTradeOne.bussinessCard');
});

Route::get('cashBill', function () {
	return view('acc.tradeInsert.otherTradeOne.cashBill');
});



Route::get('handling', function () {
	return view('acc.tradeInsert.taxbill.handling');
});

Route::get('inquiry', function () {
	return view('acc.tradeInsert.taxbill.inquiry');
});

Route::get('modification', function () {
	return view('acc.tradeInsert.taxbill.modification');
});

Route::get('send', function () {
	return view('acc.tradeInsert.taxbill.send');
});

Route::get('send_condition', function () {
	return view('acc.tradeInsert.taxbill.send_condition');
});


Route::get('copper', function () {
	return view('acc.tradeInsert.otherTradeTwo.copper');
});

Route::get('deemedPurchase', function () {
	return view('acc.tradeInsert.otherTradeTwo.deemedPurchase');
});

Route::get('elecMoney', function () {
	return view('acc.tradeInsert.otherTradeTwo.elecMoney');
});

Route::get('exportImport', function () {
	return view('acc.tradeInsert.otherTradeTwo.exportImport');
});

Route::get('noDeduction', function () {
	return view('acc.tradeInsert.otherTradeTwo.noDeduction');
});

Route::get('note', function () {
	return view('acc.tradeInsert.otherTradeTwo.note');
});

Route::get('recycle', function () {
	return view('acc.tradeInsert.otherTradeTwo.recycle');
});


Route::get('account_ledger', function () {
	return view('acc.account_book.book_management.account_ledger');
});

Route::get('buying_selling', function () {
	return view('acc.account_book.book_management.buying_selling');
});

Route::get('cash_incomingsandoutgoings', function () {
	return view('acc.account_book.book_management.cash_incomingsandoutgoings');
});

Route::get('chit', function () {
	return view('acc.account_book.book_management.chit');
});

Route::get('client_account_ledger', function () {
	return view('acc.account_book.book_management.client_account_ledger');
});

Route::get('client_buying_selling', function () {
	return view('acc.account_book.book_management.client_buying_selling');
});

Route::get('client_ledger', function () {
	return view('acc.account_book.book_management.client_ledger');
});

Route::get('daily_month_table', function () {
	return view('acc.account_book.book_management.daily_month_table');
});

Route::get('foreign_currency_account_ledger', function () {
	return view('acc.account_book.book_management.foreign_currency_account_ledger');
});

Route::get('foreign_currency_bank_hh', function () {
	return view('acc.account_book.book_management.foreign_currency_bank_hh');
});

Route::get('foreign_currency_client_ledger', function () {
	return view('acc.account_book.book_management.foreign_currency_client_ledger');
});

Route::get('journal', function () {
	return view('acc.account_book.book_management.journal');
});

Route::get('outline_ledger', function () {
	return view('acc.account_book.book_management.outline_ledger');
});

Route::get('receivables_age', function () {
	return view('acc.account_book.book_management.receivables_age');
});

Route::get('tax_calculation_hh', function () {
	return view('acc.account_book.book_management.tax_calculation_hh');
});

Route::get('tax_calculation_sum_report', function () {
	return view('acc.account_book.book_management.tax_calculation_sum_report');
});

Route::get('total_account_ledger', function () {
	return view('acc.account_book.book_management.total_account_ledger');
});


Route::get('part_cost_division', function () {
	return view('acc.account_book.project_management.part_cost_division');
});

Route::get('project_account_ledger', function () {
	return view('acc.account_book.project_management.project_account_ledger');
});

Route::get('project_account_subject_ledger', function () {
	return view('acc.account_book.project_management.project_account_subject_ledger');
});

Route::get('project_accumulation_cost', function () {
	return view('acc.account_book.project_management.project_accumulation_cost');
});

Route::get('project_accumulation_lossandgain', function () {
	return view('acc.account_book.project_management.project_accumulation_lossandgain');
});

Route::get('project_buying_selling', function () {
	return view('acc.account_book.project_management.project_buying_selling');
});

Route::get('project_client_ledger', function () {
	return view('acc.account_book.project_management.project_client_ledger');
});

Route::get('advanced_money_ledger', function () {
	return view('acc.account_book.spot_management.advanced_money_ledger');
});

Route::get('construction_account_book', function () {
	return view('acc.account_book.spot_management.construction_account_book');
});

Route::get('part_cost_details', function () {
   	return view('acc.account_book.spot_management.part_cost_details');
});

Route::get('spot_part_cost_division', function () {
	return view('acc.account_book.spot_management.spot_part_cost_division');
});

Route::get('part_cost_hh', function () {
	return view('acc.account_book.spot_management.part_cost_hh');
});

Route::get('part_lossandgain_hh', function () {
	return view('acc.account_book.spot_management.part_lossandgain_hh');
});

Route::get('spot_buying_selling', function () {
	return view('acc.account_book.spot_management.spot_buying_selling');
});

Route::get('spot_client_ledger', function () {
	return view('acc.account_book.spot_management.spot_client_ledger');
});

Route::get('spot_cost_report', function () {
	return view('acc.account_book.spot_management.spot_cost_report');
});

Route::get('spot_cost_totalization', function () {
	return view('acc.account_book.spot_management.spot_cost_totalization');
});

Route::get('spot_ledger', function () {
	return view('acc.account_book.spot_management.spot_ledger');
});

Route::get('total_cost_lossandgain_management', function () {
	return view('acc.account_book.spot_management.total_cost_lossandgain_management');
});


