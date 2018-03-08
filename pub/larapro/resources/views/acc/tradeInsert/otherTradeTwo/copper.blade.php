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
	@include('sidebar.acc.tradeInsert.otherTradeTwo.copper')
@endsection
@section('content')
   @include('content.conbutton.acc.tradeInsert.otherTradeOne.bankTrade')
   @include('content.conbreadcrumb.acc.tradeInsert.otherTradeTwo.copper')
   @include('content.conmain.acc.tradeInsert.otherTradeTwo.copper')
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
	@include('footer.scriptbot.acc.tradeInsert.otherTradeTwo.copper')
@endsection
