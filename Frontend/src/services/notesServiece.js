import http from './httpservice';
import { apiUrl } from '../config.json';


function noteUrl(id) {
    return `${apiUrl}/${id}`;
}
// returns a promise 
export function getNotes(){
 return http.get(apiUrl);
};
export function updateNote(note) {
    if (note[0]._id) {
        return http.put(noteUrl(note[0]._id), note[0]);
      }
}
export function saveNote(newnote){
  console.log('save service called ')
  if (newnote._id) {
    const body = { ...newnote };
    delete body._id;
    return http.post(apiUrl, body);
  }
};
export function  deleteNote(noteId) {
    console.log('called the delete service')
    return http.delete(noteUrl(noteId))
};

