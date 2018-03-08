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
	@include('header.menu.acc.tradeInsert.trade_insert.revenue')
@endsection
@section('img')
   @include('header.img.one')
@endsection
@section('sidebar')
	@include('sidebar.acc.tradeInsert.trade_insert')
@endsection
@section('content')
   @include('content.conmain.acc.tradeInsert.trade_insert.revenue')
@endsection
@section('footertop')
	@include('footer.footertop')
@endsection
@section('footermain')
	@include('footer.footermain')
@endsection
@section('script')
	@include('footer.script.one')
@endsection
@section('scriptbot')
	@include('footer.scriptbot.one')
@endsection
