// all function is this file can be imported anywhere in the app
// due to scope issue with mixins
import { Notification } from 'element-ui';
export const showNotification = (operationContext, status) => {
    const messages = {
        add: 'Project added successfully!',
        update: 'Project updated successfully!',
        delete: 'Project deleted successfully!',
        projectExist: 'Project name already exists!',
        responseError: 'Project deleted successfully!',
        requestError: 'Project deleted successfully!',
        messageError: 'Project deleted successfully!',
        default: 'Request was successful!'

    };

    if (status === 'error') {
        Notification.error({
            title: 'Error',
            message: messages[operationContext] || messages.default,
            duration: 5000
        });
    } else if (status === 'success') {
        Notification.success({
            title: 'Success',
            message: messages[operationContext] || messages.default,
            duration: 3000
        });
    }
}