import { createDockerDesktopClient } from '@docker/extension-api-client';

const client = createDockerDesktopClient();

export default class DesktopClientHelper {
  openUrl(url: string): void {
    client.host.openExternal(url);
  }

  get(route: string) {
    return client.extension.vm?.service?.get(route);
  }

  toast(msg: string): void {
    client.desktopUI.toast.error(msg);
  }
}
