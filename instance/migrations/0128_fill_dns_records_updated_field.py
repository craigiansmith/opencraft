# Generated by Django 2.2.9 on 2020-04-15 19:50

from django.db import migrations


def fill_dns_records_updated_field(apps, schema_editor):
    """
    Set the dns_records_updated field to the creation date of the first app server.
    If no app server exists, leave the field empty.
    """
    ContentType = apps.get_model('contenttypes', 'ContentType')
    openedx_instance_type = ContentType.objects.get_for_model(apps.get_model('instance', 'openedxinstance'))
    OpenEdXInstance = apps.get_model('instance', 'OpenEdXInstance')
    InstanceReference = apps.get_model("instance", "InstanceReference")

    for instance in OpenEdXInstance.objects.all():
        if instance.dns_records_updated is None:
            instance_ref = InstanceReference.objects.get(instance_id=instance.pk, instance_type=openedx_instance_type)
            appserver = instance_ref.openedxappserver_set.first()
            if appserver is not None:
                instance.dns_records_updated = appserver.created
                instance.save()

def rollback_dns_records_updated(apps, schema_editor):
    """Noop"""
    pass


class Migration(migrations.Migration):

    dependencies = [
        ('instance', '0127_openedxinstance_dns_records_updated'),
    ]

    operations = [
        migrations.RunPython(fill_dns_records_updated_field, rollback_dns_records_updated),
    ]
