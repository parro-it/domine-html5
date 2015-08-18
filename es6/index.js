import tags from 'html-tags';
import { widget } from 'domine';

for (let tag of tags) {
  exports[tag] = widget(tag);
}
