﻿@extends('layouts.app')
@section('style')
	@include('header.style.one')
@endsection
@section('topbar')
	@include('header.topbar.topbar')
@endsection
@section('logo')
   @include('header.logo.one')
@endsection
@section('menu')
	@include('header.menu.acc.revenue')
@endsection
@section('img')
   @include('header.img.one')
@endsection
@section('sidebar')
	@include('sidebar.acc.tradeInsert.otherTradeTwo.recycle')
@endsection
@section('content')
   @include('content.conbutton.acc.tradeInsert.otherTradeOne.bankTrade')
   @include('content.conbreadcrumb.acc.tradeInsert.otherTradeTwo.recycle')
   @include('content.conmain.acc.tradeInsert.otherTradeTwo.recycle')
   @include('content.conbuttonbot.acc.tradeInsert.trade_insert.revenue')
   @include('content.conbot.acc.tradeInsert.trade_insert.revenue')
@endsection
@section('footertop')
	@include('footer.footertop.acc.tradeInsert.copper')
@endsection
@section('footermain')
	@include('footer.footermain')
@endsection
@section('script')
	@include('footer.script.one')
@endsection
@section('scriptbot')
	@include('footer.scriptbot.acc.tradeInsert.revenue')
@endsection