# coding: utf-8

class HelloController < ApplicationController
	#def index
	#	render :text => 'hello, 日本語'
	#end
	
	def view
		#@msg = 'hello, 日本語 view'
	end
	
	def list
		@books = Book.all
	end
end
