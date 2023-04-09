---
title: aws cli quick reference
---
- `aws ec2 describe-instances --filters Name=tag:aws:cloudformation:stack-name,Values='<cloud-formation-stack-name>' --query "Reservations[].Instances[?State.Name == 'running'].[InstanceId]" --output text` - Find running instance IDs by its cloud formation stack name, where `<cloud-formation-stack-name>` is the cloud formation stack name.
- `aws ssm start-session --target <instance-ID>` - SSH into the AWS instance by instance ID, where `<instance-ID>` is the instance ID.