from django.shortcuts import render, HttpResponse, HttpResponseRedirect
from .forms import TestForm
import json
from django.utils.timezone import localtime
from django.core.urlresolvers import reverse


# Create your views here.
def page_view(request):
    return render(request, 'page.html', {'time': localtime().now().timestamp()})


def main_view(request):
    return render(request, 'main.html', {'form': TestForm()})


def test_endpoint(request):
    if request.method == 'POST':
        form = TestForm(request.POST)
        if form.is_valid():
            text = form.cleaned_data['text']
            integer = form.cleaned_data['integer']
            output = text * integer
            return HttpResponse(json.dumps({'status': 'success', 'data': output}), content_type='application/json')
        else:
            return HttpResponse(json.dumps({'status': 'error', 'data': form.errors}), content_type='application/json')
    else:
        return HttpResponseRedirect(reverse('main'))
