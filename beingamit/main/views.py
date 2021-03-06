from django.shortcuts import render

def home(request):
	resume_text = "RESUME contains Amit's work expereinces, abilities and educational qualifications"
	projects_text = " PROJECTS contains complete detail of projects Amit has worked on, including his contribution "
	articles_text = " ARTICLES contains technical articles written by Amit specifically for this website, on a diverse range of subjects "
	extra_text = " EXTRACURRICULARS contains a display of Amit's hobbies, which is mainly cartooning "
	return render(request,'index.html', {'res':resume_text, 'pro':projects_text, 'art':articles_text, 'ex':extra_text})

def page(request):
	return render(request,'page.html')

def resume(request):
	return render(request,'resume.html')

def projects(request):
	flash_notice = 'Projects page is not available at this time. Only Resume can be viewed'
	return render(request,'resume.html', {'flash':flash_notice})

def articles(request):
	flash_notice = 'Articles page is not available at this time. Only Resume can be viewed'
	return render(request,'resume.html',{'flash':flash_notice})

def extra(request):
	flash_notice = 'Extracurricular page is not available at this time. Only Resume can be viewed'
	return render(request,'resume.html',{'flash':flash_notice})
