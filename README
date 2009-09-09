Artlung Rosetta
http://github.com/artlung/Artlung-Rosetta/

Compare how to do the same thing with the same HTML with different
JavaScript libraries. Behaviors and display should be as alike as
practical.

The libraries in question are:
  * Dojo
  * Glow
  * ExtCore
  * jQuery
  * MooTools
  * Prototype

Here's the concept:
  * Same HTML code
  * Same behaviors
  * Different JavaScript library loaded
  * Thus different implementation code

For Example:
The following code adds a click event to any <input> inside an element
with an id of interactionExperiments. On click, it will make that input
disappear. You can see some libraries implement a hide() method, while
some don't (seem) to have one available, so you have to set
style.display = 'none' or in the case of MooTools you do
.setStyle({'display':'none'}). I'm not sure I'm speaking these libraries
as idiomatically as I could, and I look forward to your contributions,
via email or github.

jQuery:
  $('#interactionExperiments input').click(function(){
     $(this).hide();
     return false;
  });

Dojo:
  dojo.query('#interactionExperiments input').forEach(function(item){
     dojo.connect(item, 'onclick', function(e){
        item.style.display = 'none';
        dojo.stopEvent(e);
     });
  });

ExtCore:
  Ext.select('#interactionExperiments input').on('click', function(e, target){
     Ext.get(target).hide();
  }, null, {preventDefault:true});

Glow:
  glow.events.addListener('#interactionExperiments input', 'click', function(e){
     glow.dom.get(this).hide(); 
     return false;
  });

MooTools:
  $$('#interactionExperiments input').addEvent('click', function(e){
     this.setStyle('display','none');
     e.stop();
  });

Prototype:
  $$('#interactionExperiments input').each(function(item){
     item.observe('click', function(evt){
        item.hide();
        Event.stop(evt);
     });
  });

Thanks for reading this far,

Joe Crawford
joe@artlung.com
