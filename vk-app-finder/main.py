from concurrent import futures
import logging

import grpc
import classifier_pb2
import classifier_pb2_grpc
import classifier

from breed_formatter import *

class BreedClassifier(classifier_pb2_grpc.BreedClassifierServiceServicer):

    def RecognizeBreed(self, request, context):
        if request.path != '':
            print('*** Gotten ***')
        # img = Image.open(BytesIO(base64.b64decode(request.path)))
        breed = classifier.Xception_predict_breed(request.path)
        print('breed: %s' % breed)
        # Give a formatted breed (eng)
        breed = breed_format(breed)
        return classifier_pb2.Breed(name=breed)
    
    
def serve():
    breed_classifier = BreedClassifier()
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    classifier_pb2_grpc.add_BreedClassifierServiceServicer_to_server(breed_classifier, server)
    server.add_insecure_port('[::]:50051')
    server.start()
    server.wait_for_termination()


if __name__ == '__main__':
    logging.basicConfig()
    print('*** Breed classificator is ready ***')
    serve()
