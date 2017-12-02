from django import forms
from django.utils.translation import ugettext_lazy as _
from django.core.validators import validate_email


class TestForm(forms.Form):
    text = forms.CharField(max_length=64, required=True, label=False,
                           widget=forms.TextInput(attrs={'placeholder': _("Input text")}))
    integer = forms.IntegerField(max_value=10, required=True, label='Count of text')
    email = forms.CharField(max_length=32, required=True,
                            widget=forms.EmailInput(attrs={'placeholder': _('Email')}), label=False)

    def clean(self):
        form_data = self.cleaned_data
        text = self.cleaned_data.get("text")
        email = self.cleaned_data.get("email")
        validate_email(email)
        if 'a' in text:
            raise forms.ValidationError("DON'T USE 'a' SYMBOL")
        return form_data
