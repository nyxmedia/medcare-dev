"""
Defining Opal PatientLists
"""
from opal import core
from opal.models import Episode

from medcare import models
from obs import models as obsmodels
from lab import models as labmodels

class AllPatientsList(core.patient_lists.PatientList):
    display_name = 'All Patients'

    schema = [
        models.Demographics,
        models.Diagnosis,
        models.Treatment,
        labmodels.LabTest,
        obsmodels.Observation
    ]

    def get_queryset(self, **kwargs):
        return Episode.objects.all()