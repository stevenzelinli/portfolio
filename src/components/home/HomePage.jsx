import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import '../../styles/_home.scss';

const HomePage = () => (
    <div className="home-content">
        <Jumbotron className="intro">
            <div>
                <h1 id="part1">Welcome to my website.</h1>
                <span>
                    <h1 id="part2">I am a</h1>
                    <h1 id="part3">Fullstack Developer</h1>
                    <h1 id="part4">SCRUM Master</h1>
                </span>
            </div>
        </Jumbotron>
        <Jumbotron className="anchors" id="skills">
            <h1>Skills</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin turpis mauris, tristique eget sagittis et, egestas sit amet dolor. Vivamus dictum varius sem, eget faucibus libero rutrum nec. Aenean lobortis ex ipsum, sit amet posuere turpis aliquam quis. Cras in tellus aliquam, ullamcorper nibh feugiat, vestibulum lacus. Morbi tempor lorem libero, et venenatis lectus mollis ac. Suspendisse vitae dui sit amet mauris finibus congue. Sed elementum nibh rhoncus, placerat metus nec, volutpat justo. Etiam at erat eget nibh fermentum dignissim a nec massa. Suspendisse auctor ante id scelerisque suscipit. Aliquam in tincidunt sem. Sed efficitur congue egestas.

                Praesent mattis mollis nisl, a aliquet lorem vehicula nec. Integer velit risus, interdum sit amet lobortis non, lacinia vel ante. Vestibulum eu urna sem. Quisque interdum odio sapien, vitae eleifend ex auctor mollis. Nullam at elit ac diam ultrices placerat non eget justo. Vivamus malesuada risus nec ex aliquet, ac aliquet erat cursus. Suspendisse tincidunt sodales lorem vitae ultricies. Sed et commodo diam, sed ullamcorper odio. Donec posuere porttitor justo nec consequat. Vestibulum rutrum blandit sem vitae vestibulum. Curabitur dignissim pellentesque ex a viverra.

                Cras diam nibh, eleifend sit amet feugiat in, imperdiet sed enim. Donec vitae lorem in odio facilisis aliquam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut sed bibendum odio. Integer pulvinar vitae enim a venenatis. Nam bibendum fermentum congue. Mauris at ligula justo. Mauris ex felis, consectetur at mauris pretium, accumsan facilisis eros. Vestibulum tempus gravida libero. Etiam ac volutpat enim, maximus posuere nulla. Vivamus ac enim iaculis, euismod est at, scelerisque turpis. Nullam sodales ac est in dignissim. Nullam eu rutrum nisl. Duis et lorem ante.

                Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam eget condimentum dui. Nullam facilisis lacus fermentum, semper enim in, convallis est. Nulla varius justo sed libero venenatis, nec molestie nisi semper. Proin in rutrum ante, vitae interdum nulla. Phasellus nunc metus, tincidunt in orci in, fermentum finibus ligula. Sed porttitor, diam ut ultrices porta, tellus nulla tincidunt elit, ac varius mi eros a nunc. Vestibulum placerat vel nulla in vestibulum. Curabitur scelerisque efficitur lacinia. Curabitur dictum odio at neque sollicitudin, a ultricies lectus feugiat.

                Maecenas turpis risus, varius eu laoreet sit amet, varius ac tellus. Sed hendrerit id tellus a varius. Nullam a orci id metus mattis porttitor quis at urna. Sed eu mollis lectus. Curabitur hendrerit metus metus, nec ornare ante pharetra vitae. Fusce hendrerit urna ut iaculis luctus. Mauris at varius ex. In et dolor orci. Sed mollis, augue non luctus egestas, augue libero tincidunt enim, in molestie ante turpis eget justo. Aliquam efficitur quam nec ex lacinia, non commodo orci mollis.
            </p>
        </Jumbotron>
        <Jumbotron className="anchors" id="experience">
            <h1>Experience</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin turpis mauris, tristique eget sagittis et, egestas sit amet dolor. Vivamus dictum varius sem, eget faucibus libero rutrum nec. Aenean lobortis ex ipsum, sit amet posuere turpis aliquam quis. Cras in tellus aliquam, ullamcorper nibh feugiat, vestibulum lacus. Morbi tempor lorem libero, et venenatis lectus mollis ac. Suspendisse vitae dui sit amet mauris finibus congue. Sed elementum nibh rhoncus, placerat metus nec, volutpat justo. Etiam at erat eget nibh fermentum dignissim a nec massa. Suspendisse auctor ante id scelerisque suscipit. Aliquam in tincidunt sem. Sed efficitur congue egestas.

                Praesent mattis mollis nisl, a aliquet lorem vehicula nec. Integer velit risus, interdum sit amet lobortis non, lacinia vel ante. Vestibulum eu urna sem. Quisque interdum odio sapien, vitae eleifend ex auctor mollis. Nullam at elit ac diam ultrices placerat non eget justo. Vivamus malesuada risus nec ex aliquet, ac aliquet erat cursus. Suspendisse tincidunt sodales lorem vitae ultricies. Sed et commodo diam, sed ullamcorper odio. Donec posuere porttitor justo nec consequat. Vestibulum rutrum blandit sem vitae vestibulum. Curabitur dignissim pellentesque ex a viverra.

                Cras diam nibh, eleifend sit amet feugiat in, imperdiet sed enim. Donec vitae lorem in odio facilisis aliquam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut sed bibendum odio. Integer pulvinar vitae enim a venenatis. Nam bibendum fermentum congue. Mauris at ligula justo. Mauris ex felis, consectetur at mauris pretium, accumsan facilisis eros. Vestibulum tempus gravida libero. Etiam ac volutpat enim, maximus posuere nulla. Vivamus ac enim iaculis, euismod est at, scelerisque turpis. Nullam sodales ac est in dignissim. Nullam eu rutrum nisl. Duis et lorem ante.

                Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam eget condimentum dui. Nullam facilisis lacus fermentum, semper enim in, convallis est. Nulla varius justo sed libero venenatis, nec molestie nisi semper. Proin in rutrum ante, vitae interdum nulla. Phasellus nunc metus, tincidunt in orci in, fermentum finibus ligula. Sed porttitor, diam ut ultrices porta, tellus nulla tincidunt elit, ac varius mi eros a nunc. Vestibulum placerat vel nulla in vestibulum. Curabitur scelerisque efficitur lacinia. Curabitur dictum odio at neque sollicitudin, a ultricies lectus feugiat.

                Maecenas turpis risus, varius eu laoreet sit amet, varius ac tellus. Sed hendrerit id tellus a varius. Nullam a orci id metus mattis porttitor quis at urna. Sed eu mollis lectus. Curabitur hendrerit metus metus, nec ornare ante pharetra vitae. Fusce hendrerit urna ut iaculis luctus. Mauris at varius ex. In et dolor orci. Sed mollis, augue non luctus egestas, augue libero tincidunt enim, in molestie ante turpis eget justo. Aliquam efficitur quam nec ex lacinia, non commodo orci mollis.
            </p>
        </Jumbotron>
        <Jumbotron className="anchors" id="projects">
            <h1>Projects</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin turpis mauris, tristique eget sagittis et, egestas sit amet dolor. Vivamus dictum varius sem, eget faucibus libero rutrum nec. Aenean lobortis ex ipsum, sit amet posuere turpis aliquam quis. Cras in tellus aliquam, ullamcorper nibh feugiat, vestibulum lacus. Morbi tempor lorem libero, et venenatis lectus mollis ac. Suspendisse vitae dui sit amet mauris finibus congue. Sed elementum nibh rhoncus, placerat metus nec, volutpat justo. Etiam at erat eget nibh fermentum dignissim a nec massa. Suspendisse auctor ante id scelerisque suscipit. Aliquam in tincidunt sem. Sed efficitur congue egestas.

                Praesent mattis mollis nisl, a aliquet lorem vehicula nec. Integer velit risus, interdum sit amet lobortis non, lacinia vel ante. Vestibulum eu urna sem. Quisque interdum odio sapien, vitae eleifend ex auctor mollis. Nullam at elit ac diam ultrices placerat non eget justo. Vivamus malesuada risus nec ex aliquet, ac aliquet erat cursus. Suspendisse tincidunt sodales lorem vitae ultricies. Sed et commodo diam, sed ullamcorper odio. Donec posuere porttitor justo nec consequat. Vestibulum rutrum blandit sem vitae vestibulum. Curabitur dignissim pellentesque ex a viverra.

                Cras diam nibh, eleifend sit amet feugiat in, imperdiet sed enim. Donec vitae lorem in odio facilisis aliquam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut sed bibendum odio. Integer pulvinar vitae enim a venenatis. Nam bibendum fermentum congue. Mauris at ligula justo. Mauris ex felis, consectetur at mauris pretium, accumsan facilisis eros. Vestibulum tempus gravida libero. Etiam ac volutpat enim, maximus posuere nulla. Vivamus ac enim iaculis, euismod est at, scelerisque turpis. Nullam sodales ac est in dignissim. Nullam eu rutrum nisl. Duis et lorem ante.

                Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam eget condimentum dui. Nullam facilisis lacus fermentum, semper enim in, convallis est. Nulla varius justo sed libero venenatis, nec molestie nisi semper. Proin in rutrum ante, vitae interdum nulla. Phasellus nunc metus, tincidunt in orci in, fermentum finibus ligula. Sed porttitor, diam ut ultrices porta, tellus nulla tincidunt elit, ac varius mi eros a nunc. Vestibulum placerat vel nulla in vestibulum. Curabitur scelerisque efficitur lacinia. Curabitur dictum odio at neque sollicitudin, a ultricies lectus feugiat.

                Maecenas turpis risus, varius eu laoreet sit amet, varius ac tellus. Sed hendrerit id tellus a varius. Nullam a orci id metus mattis porttitor quis at urna. Sed eu mollis lectus. Curabitur hendrerit metus metus, nec ornare ante pharetra vitae. Fusce hendrerit urna ut iaculis luctus. Mauris at varius ex. In et dolor orci. Sed mollis, augue non luctus egestas, augue libero tincidunt enim, in molestie ante turpis eget justo. Aliquam efficitur quam nec ex lacinia, non commodo orci mollis.
            </p>
        </Jumbotron>
        <Jumbotron className="anchors" id="contact">
            <h1>Contact</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin turpis mauris, tristique eget sagittis et, egestas sit amet dolor. Vivamus dictum varius sem, eget faucibus libero rutrum nec. Aenean lobortis ex ipsum, sit amet posuere turpis aliquam quis. Cras in tellus aliquam, ullamcorper nibh feugiat, vestibulum lacus. Morbi tempor lorem libero, et venenatis lectus mollis ac. Suspendisse vitae dui sit amet mauris finibus congue. Sed elementum nibh rhoncus, placerat metus nec, volutpat justo. Etiam at erat eget nibh fermentum dignissim a nec massa. Suspendisse auctor ante id scelerisque suscipit. Aliquam in tincidunt sem. Sed efficitur congue egestas.

                Praesent mattis mollis nisl, a aliquet lorem vehicula nec. Integer velit risus, interdum sit amet lobortis non, lacinia vel ante. Vestibulum eu urna sem. Quisque interdum odio sapien, vitae eleifend ex auctor mollis. Nullam at elit ac diam ultrices placerat non eget justo. Vivamus malesuada risus nec ex aliquet, ac aliquet erat cursus. Suspendisse tincidunt sodales lorem vitae ultricies. Sed et commodo diam, sed ullamcorper odio. Donec posuere porttitor justo nec consequat. Vestibulum rutrum blandit sem vitae vestibulum. Curabitur dignissim pellentesque ex a viverra.

                Cras diam nibh, eleifend sit amet feugiat in, imperdiet sed enim. Donec vitae lorem in odio facilisis aliquam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut sed bibendum odio. Integer pulvinar vitae enim a venenatis. Nam bibendum fermentum congue. Mauris at ligula justo. Mauris ex felis, consectetur at mauris pretium, accumsan facilisis eros. Vestibulum tempus gravida libero. Etiam ac volutpat enim, maximus posuere nulla. Vivamus ac enim iaculis, euismod est at, scelerisque turpis. Nullam sodales ac est in dignissim. Nullam eu rutrum nisl. Duis et lorem ante.

                Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam eget condimentum dui. Nullam facilisis lacus fermentum, semper enim in, convallis est. Nulla varius justo sed libero venenatis, nec molestie nisi semper. Proin in rutrum ante, vitae interdum nulla. Phasellus nunc metus, tincidunt in orci in, fermentum finibus ligula. Sed porttitor, diam ut ultrices porta, tellus nulla tincidunt elit, ac varius mi eros a nunc. Vestibulum placerat vel nulla in vestibulum. Curabitur scelerisque efficitur lacinia. Curabitur dictum odio at neque sollicitudin, a ultricies lectus feugiat.

                Maecenas turpis risus, varius eu laoreet sit amet, varius ac tellus. Sed hendrerit id tellus a varius. Nullam a orci id metus mattis porttitor quis at urna. Sed eu mollis lectus. Curabitur hendrerit metus metus, nec ornare ante pharetra vitae. Fusce hendrerit urna ut iaculis luctus. Mauris at varius ex. In et dolor orci. Sed mollis, augue non luctus egestas, augue libero tincidunt enim, in molestie ante turpis eget justo. Aliquam efficitur quam nec ex lacinia, non commodo orci mollis.
            </p>
        </Jumbotron>
    </div>
);

export default HomePage;
