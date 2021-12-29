// import {setValue} from "../api";
import * as _ from 'lodash';
import { InputName } from '../../types';

export function removeEventListeners({
  inputName,
  eventListeners
}: {
  inputName: InputName;
  eventListeners: Array<any>;
}) {
  return eventListeners.filter((eventListener) => {
    if (eventListener.inputName === inputName) {
      if (
        eventListener.element instanceof HTMLElement &&
        eventListener.element.removeEventListener
      ) {
        eventListener.element.removeEventListener(
          'input',
          eventListener.listenerHandler
        );
        return false;
      }
    }
    return true;
  });
}
