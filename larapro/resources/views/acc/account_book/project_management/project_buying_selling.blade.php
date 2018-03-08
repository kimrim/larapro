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
	@include('header.menu.acc.buying_selling')
@endsection
@section('img')
   @include('header.img.one')
@endsection
@section('sidebar')
	@include('sidebar.acc.account_book.project_management.project_buying_selling')
@endsection
@section('content')
   @include('content.conmain.acc.account_book.project_management.project_buying_selling')
@endsection
@section('footertop')
	@include('footer.footertop.acc.account_book.project_management.project_account_ledger')
@endsection
@section('footermain')
	@include('footer.footermain')
@endsection
@section('script')
	@include('footer.script.one')
@endsection
@section('scriptbot')

@endsection
