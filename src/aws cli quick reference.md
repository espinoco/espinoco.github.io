---
title: aws cli quick reference
---
- `aws ec2 describe-instances --filters Name=tag:aws:cloudformation:stack-name,Values='<cloud-formation-stack-name>' --query "Reservations[].Instances[?State.Name == 'running'].[InstanceId]" --output text` - Find running EC2 instance IDs by its `<cloud-formation-stack-name>`. 
- `aws ssm start-session --target <instance-ID>` - SSH into an the `<instance-ID>`.